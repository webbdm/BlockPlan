import React from "react";
import "./App.scss";
import { useQuery, gql } from "@apollo/client";
import { Block } from "./typescript/interfaces";
import BlockComponent from "./components/blocks/Block";

const GET_BLOCKS = gql`
  query GetBlocks {
    blocks {
      due_date
      text
      title
      block_id
      block_type_id
      created_at
      completed
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(GET_BLOCKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div className="App">
      <div>
        {data.blocks.map((block: Block) => (
          <BlockComponent key={block.block_id} block={block} />
        ))}
      </div>
    </div>
  );
};

export default App;
