import React from 'react';
import { Button } from '@components';

export const FooterGroup = ({ header, links }) => {
  return (
    <div className="flex flex-col px-10">
      <h4 className="font-semibold mb-1">{header}</h4>
      {links.map(({ display, link }) => (
        <Button link={link} className="my-1">
          {display.charAt(0).toUpperCase() + display.slice(1)}
        </Button>
      ))}
    </div>
  );
};