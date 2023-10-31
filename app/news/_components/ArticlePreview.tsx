import { Flex, Heading, Text } from "@radix-ui/themes";
import Link from "@/app/components/Link";
import Image from "next/image";

interface Props {
  article: {
    authorFormatted: string;
    description: string;
    shorterHeadline: string;
    url: string;
    shortDateLastPublished: string;
    promoImage: {
      url: string;
    };
  };
}

const ArticlePreview = ({ article }: Props) => {
  const {
    authorFormatted,
    description,
    url,
    shortDateLastPublished,
    shorterHeadline,
    promoImage,
  } = article;

  const capitalizeAuthorName = (name: string) => {
    const namesArray = name.split(" ");
    const capitalizedNamesArray = namesArray.map(
      (name) => name.charAt(0).toUpperCase() + name.slice(1)
    );
    return capitalizedNamesArray.join(" ");
  };

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open(url, "_blank");
  };

  return (
    <a href={url} target="_blank" onClick={handleLinkClick}>
      <Flex
        gap="3"
        className="hover:bg-[#f8f9fd] cursor-pointer rounded-xl p-3"
      >
        <div className="w-48 h-32 overflow-hidden rounded-xl">
          <img
            src={promoImage?.url}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt="article-media"
          />
        </div>
        <Flex direction="column" gap="2" align="start" className="mb-2">
          <Heading size="5">{shorterHeadline}</Heading>
          <Flex gap="2">
            <Text size="1">{capitalizeAuthorName(authorFormatted)}</Text>
            <Text size="1">•</Text>
            <Text size="1">{shortDateLastPublished}</Text>
          </Flex>
          <Text size="2">{description}</Text>
        </Flex>
      </Flex>
    </a>
  );
};

export default ArticlePreview;
