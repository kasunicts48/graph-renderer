"use server";

const MAX_NODES = 6;

interface RenderGraphResponse {
  edges?: string[];
  nodes?: string[];
  message?: string;
}


export async function renderGraph(formData: FormData): Promise<RenderGraphResponse> {
  const graphNotation = formData.get("graph-notation") as string;

  if (!graphNotation) {
    return {
      message: "Hey, your graph notation is missing!",
    };
  }

  // CODE FOR TASK 3.4 -----------------------------------------

  const lines = graphNotation.trim().split("\n");
  const nodes = new Set<string>();
  const edges = new Set<string>();

  try {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      const match = line.match(/^([A-Z])->([A-Z])$/);

      if (!match) {
        return {
          message: `Hey, there was an error parsing line ${i + 1} of your graph notation!`,
        };
      }

      const source = match[1];
      const target = match[2];
      nodes.add(source);
      nodes.add(target);
      edges.add(`${source}${target}`);

      if (nodes.size > MAX_NODES) {
        const slicedNodes = Array.from(nodes).slice(0, MAX_NODES);
        return {
          edges: Array.from(edges),
          nodes: slicedNodes,
        };
      }
    }

    return {
      edges: Array.from(edges),
      nodes: Array.from(nodes),
    };
  } catch (error) {
    return {
      message: `Hey, there was an error parsing your graph notation!,  error = ${error}`,
    };
  }

  // END OF CODE FOR TASK 3.4 ----------------------------------
}
