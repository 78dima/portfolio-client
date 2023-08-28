import React from 'react';
import ContentLoader from 'react-content-loader';

const Loading = (props) => {
  const rows = 2;
  const columns = 5;
  const coverHeight = 85;
  const coverWidth = 65;
  const padding = 5;
  const speed = 1;

  const coverHeightWithPadding = coverHeight + padding;
  const coverWidthWithPadding = coverWidth + padding;
  const initial = 35;
  const covers = Array(columns * rows).fill(1);

  return (
    <ContentLoader
      speed={speed}
      width={columns * coverWidthWithPadding}
      height={rows * coverHeightWithPadding}
      primaryColor="#242b34"
      secondaryColor="#343d4c"
      {...props}
    >
      <rect x="0" y="0" rx="0" ry="0" width={columns * coverWidthWithPadding - padding} height="20" />

      {covers.map((_, i) => {
        const vy = Math.floor(i / columns) * coverHeightWithPadding + initial;
        const vx = (i * coverWidthWithPadding) % (columns * coverWidthWithPadding);
        return <rect key={i} x={vx} y={vy} rx="0" ry="0" width={coverWidth} height={coverHeight} />;
      })}
    </ContentLoader>
  );
};

export default Loading;
