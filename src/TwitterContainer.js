import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import './TwitterContainer.css';

const TwitterContainer = () => {
  return (
      <div className="twitter-embed">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ResonateAU"
          options={{
            tweetLimit: "10",
            width: 1000,
            height: "100%"
          }}
          theme="dark"
          noHeader="true"
          noBorders="true"
          noFooter="true"
        />
      </div>
  );
};

export default TwitterContainer;