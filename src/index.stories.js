// node modules
import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

// local files
import bookmarks from "./bookmarks.json";
import { GlobalStyle, Iframe } from "./style";

bookmarks.forEach(bookmark => {
  const stories = storiesOf(`${bookmark.title}`, module);
  bookmark.list.forEach(({ title, url }) => {
    stories.add(title, () => {
      const [isLoaded, setIsLoaded] = useState(false);

      return (
        <>
          <GlobalStyle />
          <Iframe
            src={url}
            onLoad={() => {
              setIsLoaded(true);
            }}
            isLoaded={isLoaded}
          />
        </>
      );
    });
  });
});
