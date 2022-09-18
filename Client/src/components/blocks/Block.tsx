import * as React from "react";

import { Block } from "../../typescript/interfaces";

interface BlockComponentProps {
    block: Block
}

const BlockComponent: React.FC<BlockComponentProps> = ({block}) => {
    return <div>{block.title}</div>;
};

export default BlockComponent;