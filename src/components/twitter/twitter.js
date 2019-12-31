import React from 'react';
import { TwitterFollowButton, TwitterTimelineEmbed } from 'react-twitter-embed';

import styles from './twitter.css.js';

const Twitter = ({ name, screenName }) => (
  <div className={styles}>
    <h1 className={styles}>{name}</h1>
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName={screenName}
      options={{ height: 400 }}
    />
    <TwitterFollowButton screenName={screenName} />
  </div>
);

export default Twitter;
