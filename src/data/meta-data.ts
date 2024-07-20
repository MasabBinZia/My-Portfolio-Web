import type { Metadata } from "next";
import { MetaData } from "@/data/constants";

type MetadataKeys = keyof typeof MetaData;

const mapMetadata = (keys: MetadataKeys[]): Partial<Metadata> => {
  return keys.reduce((acc, key) => {
    switch (key) {
      case 'URL':
        acc.metadataBase = new URL(MetaData[key]);
        break;
      case 'opengraph':
        acc.openGraph = MetaData[key];
        break;
      case 'keywords':
        acc.keywords = MetaData[key];
        break;
      case 'title':
        acc.title = MetaData[key];
        break;
      case 'description':
        acc.description = MetaData[key];
        break;
      case 'robots':
        acc.robots = MetaData[key];
        break;
    }
    return acc;
  }, {} as Partial<Metadata>);
};

export const metadata: Metadata = mapMetadata([
  'URL',
  'keywords',
  'title',
  'description',
  'opengraph',
  'robots'
]);