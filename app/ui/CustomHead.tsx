import {
  AbsoluteString,
  DefaultTemplateString,
} from "next/dist/lib/metadata/types/metadata-types";
import Head from "next/head";
import React from "react";

interface HeadProps {
  title?: string | DefaultTemplateString | AbsoluteString;
  description?: string;
  keywords?: string;
}
const CustomHead: React.FC<HeadProps> = ({ title, description, keywords }) => (
  <Head>
    <title>{title as string}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
);

export default CustomHead;
