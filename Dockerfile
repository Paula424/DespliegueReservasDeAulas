FROM maven:3.9.4-eclipse-temurin-17 AS build
WORKDIR /app
COPY . .
ENV LANG=C.UTF-8
ENV JAVA_TOOL_OPTIONS=-Dfile.encoding=UTF-8
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
CMD ["java", "-jar", "app.jar"]
