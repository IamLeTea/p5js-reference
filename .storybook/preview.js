import React, { useEffect } from "react";

const withBodyNoInlineStyle = (Story, context) => {
  useEffect(() => {
    document.body.style = null;
  }, []);

  return <Story {...context} />;
};

export const decorators = [withBodyNoInlineStyle];
