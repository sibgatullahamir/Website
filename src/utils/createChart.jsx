import { TreeNode } from "react-organizational-chart";
import styled from "styled-components";

const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid red;
`;

export const renderTreeNodes = (data, currentLevel, parentId) => {
  // Base case: Stop recursion if currentLevel is less than 0
  if (currentLevel < 0) {
    console.log(`Stopping recursion: Reached level less than 0`);
    return null;
  }

  // Log current filtering parameters
  console.log(`Rendering level: ${currentLevel}, Parent ID: ${parentId}`);

  // Filter nodes at the current level and matching the parentId
  const nodesAtCurrentLevel = data.filter(
    (node) => node.level === currentLevel && node.report_to === parentId
  );

  // Log filtered nodes to ensure correct data is being captured
  console.log(
    `Nodes at level ${currentLevel} with parent ${parentId}:`,
    nodesAtCurrentLevel
  );

  // If no nodes are found, return null to stop rendering further
  if (nodesAtCurrentLevel.length === 0) {
    console.log(
      `No nodes found at level ${currentLevel} for parent ID ${parentId}`
    );
    return null;
  }

  // Render nodes and recursively call the function for child nodes
  return nodesAtCurrentLevel.map((node) => (
    <TreeNode key={node._id} label={<StyledNode>{node.name}</StyledNode>}>
      {/* Recursively render children at the next lower level */}
      {renderTreeNodes(data, currentLevel - 1, node._id)}
    </TreeNode>
  ));
};
