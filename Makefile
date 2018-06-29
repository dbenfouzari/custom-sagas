DOCKER_COMPOSE  = docker-compose

SONAR_DIR       = .
SONARQUBE       = sonar
SONAR_SCANNER   = sonar-scanner

##
## Project
## -------
##

modules-install: ## Installs project dependencies
	yarn install

install: modules-install ## Installs the project

##
## > Sonar
## Used to run some stats about the project
## -------
##

sonarqube: ## Runs SonarQube
	cd $(SONAR_DIR) && $(DOCKER_COMPOSE) up -d $(SONARQUBE)

sonar-scanner: sonarqube ## Runs Sonar-Scanner
	cd $(SONAR_DIR) &&$(DOCKER_COMPOSE) up $(SONAR_SCANNER)

.PHONY: modules-install install sonarqube sonar-scanner

.DEFAULT_GOAL := help
help:
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'
.PHONY: help
