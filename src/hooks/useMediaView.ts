"use client";
import { useMediaQuery } from "@chakra-ui/react";

const useMediaView = (viewPort?: number) => {
  
  const [pcView] = useMediaQuery("(min-width: 1200px)");
  const [tabletView] = useMediaQuery("(min-width: 800px) and (max-width: 1199px)");
  const [mobileView] = useMediaQuery("(max-width: 799px)");  
  const [customMaxView] = useMediaQuery(`"(max-width: ${viewPort}px)"`);

  return {
    pcView,
    tabletView,
    mobileView,
    customMaxView,
  };
};

export default useMediaView;
