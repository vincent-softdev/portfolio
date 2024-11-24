import React from 'react';

type FooterIconCardProps = React.HTMLAttributes<HTMLDivElement> & {
  data: { value: string; icon: string; active: boolean };
};

const FooterIconCard: React.FC<FooterIconCardProps> = ({ data, ...rest }) => {
  return (
    <div {...rest}>
      {data.active ? (
        <a href={data.value} target="__blank">
          <img src={data.icon} alt="contact icons" />
        </a>
      ) : (
        <>
          <img src={data.icon} alt="contact icons" />
          <span>{data.value}</span>
        </>
      )}
    </div>
  );
};

export default FooterIconCard;
