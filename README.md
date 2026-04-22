# Binding Data from Remote Services to Angular DataGrid

## Repository Description

This repository contains a collection of Angular DataGrid samples that demonstrate how to bind data from various remote services using Syncfusion’s EJ2 Angular Grid. Each sample focuses on a specific adaptor or communication pattern commonly used in real-world enterprise applications.

The repository is designed as a **multi-sample workspace**, where each folder represents an independent client–server setup. These samples should be run individually by navigating to the appropriate server and client projects.

## Project Overview

The Syncfusion EJ2 Angular Grid supports powerful data operations such as paging, sorting, filtering, and CRUD actions when working with remote data. This repository demonstrates how these operations are handled using different adaptors and backend technologies.

Each sample includes:

- A **server project** that exposes data using a specific protocol or API pattern
- An **Angular client application** that consumes the remote data using the corresponding Syncfusion DataManager adaptor

The goal is to provide clear, isolated references for implementing remote data binding in Angular applications without mixing multiple approaches in a single setup.

## Included Samples

The repository includes the following adaptor-based samples:

- **UrlAdaptor** – Basic HTTP-based data operations using custom endpoints
- **WebApiAdaptor** – ASP.NET Core Web API integration with standard REST patterns
- **WebMethodAdaptor** – Data binding using controller web methods
- **ODataV4Adaptor** – Integration with OData v4 services
- **RemoteSaveAdaptor** – Server-side CRUD operations with remote save handling
- **GraphQLAdaptor** – Data binding using a GraphQL server and Angular client

Each sample is self-contained and has its own server and client projects.

## Prerequisites

Ensure the following tools are installed before running any sample:

- Node.js (LTS version recommended)
- Angular CLI
- .NET SDK (for ASP.NET Core server projects)
- Visual Studio or Visual Studio Code

## Running the Samples

Each sample must be executed independently by starting its server and client projects separately.

### General Execution Flow

For every sample, follow this sequence:

1. Start the **server project**
2. Start the **Angular client project**
3. Access the Angular application in the browser

### Example: UrlAdaptor Sample

1. Navigate to the server project:

   ```bash
   cd UrlAdaptor/UrlAdaptor.Server
   dotnet run
   ```

   This starts the ASP.NET Core server that exposes grid data endpoints.

2. Open a new terminal and navigate to the Angular client:

   ```bash
   cd UrlAdaptor/urladaptor.client
   npm install
   ng serve
   ```

3. Open the displayed local URL in a browser to view the Angular DataGrid bound to remote data.

### Other Samples

The same execution pattern applies to the following folders:

- `WebApiAdaptor`
- `WebMethodAdaptor`
- `ODataV4Adaptor`
- `RemoteSaveAdaptor`

Each of these contains:

- A `.Server` folder for the ASP.NET Core backend
- A `.client` folder for the Angular frontend

### GraphQL Adaptor Sample

The GraphQL sample includes an additional Node.js-based GraphQL server.

1. Start the GraphQL server:

   ```bash
   cd GraphQLAdaptor/GraphQLServer
   npm install
   npm start
   ```

2. Start the Angular client:

   ```bash
   cd GraphQLAdaptor/GridClient
   npm install
   ng serve
   ```

## Usage Notes

- All grid operations such as paging, sorting, filtering, and CRUD are processed remotely
- The Syncfusion DataManager automatically maps grid actions to server requests
- Proxy configurations are used in some Angular clients to route API calls during development

## Additional Resources

- [Syncfusion Grid Connecting to Adaptors](https://ej2.syncfusion.com/angular/documentation/grid/connecting-to-adaptors)
- [Syncfusion Angular Grid Documentation](https://ej2.syncfusion.com/angular/documentation/grid/getting-started)
- [Syncfusion Angular Grid Demos](https://ej2.syncfusion.com/angular/demos)
