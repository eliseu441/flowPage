import { useState, useMemo } from 'react';
import ReactFlow from 'react-flow-renderer';

import Node from './Node';
import Popover from './Popover';
import { generateFlow } from '../utils';

const Flow = ({ mode, steps }) => {
  const [stepDetails, setStepDetails] = useState(null);

  const nodeTypes = {
    basic:  Node,
  };

  const elements = useMemo(() => {
    const width = 300;
    const height = 200;
    const flow = generateFlow(width, height, steps);
    const elements = flow
      .map((node) => ({
        id: `${mode}-${node.id}`,
        type: 'basic',
        data: { ...node },
        position: { x: node.x, y: node.y},
        sourcePosition: 'top',
        targetPosition: 'bottom',
        className: 'node',
      }))
      .concat(
        steps.map(({ id, previous }) =>
          previous.map(
            ({ stepId: previousId, count, label, animated }) => ({
              id: `${mode}-${id}-${previousId}}`,
              source: `${mode}-${previousId}`,
              target: `${mode}-${id}`,
              style: {
                strokeWidth: 1,
                stroke: 'rgb(0,0,0)'
              },
               color:"black",
              type: 'straight',
              arrowHeadType: `arrowclosed`,
              arrowHeadColor:'rgb(0,0,0)',
              labelShowBg: true,
              animated: animated == true? true : false,
              label: `${label ? label + ': ' : ''}${count}`,
              labelStyle: {
                fontFamily: 'Roboto, sans-serif',
                fontSize: 10,
              },
              labelBgStyle: {
                stroke: 'rgb(152,152,152)',
              },
            })
          )
        ).flat()
      );
    return elements;
  }, [mode, steps]);

  return (
    <div style={{
      height: '100%',
      backgroundColor: '#efefef',
    }}>
      <ReactFlow
        onElementClick={(evt, node) => {
            setStepDetails({ evt: evt.currentTarget, node });
        }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        paneMoveable={true}
        zoomOnPinch={true}
        zoomOnScroll={true}
        zoomOnDoubleClick={true}
        nodeTypes={nodeTypes}
        elements={elements}
      />
      <Popover
        anchor={stepDetails?.evt || null}
        onClose={() => setStepDetails(null)}
        nodeData={stepDetails?.node || null}
        onBottom={true}
      />
    </div>
  );
};

export default Flow;