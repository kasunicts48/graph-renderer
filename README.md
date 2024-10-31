# graph-renderer

The Next.js Developer's Technical Assessment base repository, detailing the design and creation of a graph rendering tool (as an adjacency matrix)

## Overview

The Graph Renderer application allows users to visualize graphs based on simple notations. Users can input graph edges in a specific format, and the application generates the corresponding graph and adjacency matrix.

## Tasks Overview

### Task 2: User Name Input

-   Implemented a user input form to capture the user's name and redirect them to the dashboard.

### Task 3: Dashboard Route & Graph Rendering

-   Created a server component to handle graph notation input.
-   Validated input format and extracted unique nodes and edges.
-   Implemented error handling for malformed inputs.

### Task 4: Dashboard Component

-   Designed the dashboard interface, including sections for instructions, graph editor, and adjacency matrix.
-   Utilized responsive design principles for a better user experience.

## Installation

To run the project, clone the repository and execute:

Navigate to folder you see a single folder named src/

```bash
    npm install
    npm run dev

```

### input.tsx component code changed

I changed this code because:

1. To Support value and onChange Props
2. To Ensure type Accepts Only Valid HTML Input Types
3. To Improve Readability and Maintainability with an InputProps Interface
