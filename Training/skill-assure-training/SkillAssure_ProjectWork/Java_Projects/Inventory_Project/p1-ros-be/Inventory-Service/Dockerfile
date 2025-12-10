FROM openjdk:11.0.3-jre-slim-stretch
VOLUME /config
ADD target/InventoryService-0.0.1-SNAPSHOT.jar /InventoryService.jar
EXPOSE 8093
RUN bash -c 'touch /InventoryService.jar'
ENTRYPOINT ["java","-jar","/InventoryService.jar"]
