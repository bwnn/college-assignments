import React from 'react';
import { ExternalLink } from '@components';

export const SocialsGroup = () => {
  return (
    <div className="flex flex-col px-10">
      <h4 className="font-semibold mb-1">Follow Us</h4>
      {socialLinks.map(({ display, link }) => (
        <ExternalLink link={link} className="my-1">
          {display}
        </ExternalLink>
      ))}
    </div>
  );
};

const socialLinks = [
  { display: 'Twitter', link: 'https://www.twitter.com/shopmart' },
  { display: 'Instagram', link: 'https://www.instagram.com/shopmart' },
  { display: 'Facebook', link: 'https://www.facebook.com/shopmart' },
];
