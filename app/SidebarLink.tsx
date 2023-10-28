"use client";
import { Flex, Text } from "@radix-ui/themes";
import {
  RectangleGroupIcon,
  ChartBarIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";
import {
  RectangleGroupIcon as RectangleGroupIconFilled,
  ChartBarIcon as ChartBarIconFilled,
  NewspaperIcon as NewspaperIconFilled,
} from "@heroicons/react/24/solid";
import { ReactNode } from "react";

interface Props {
  title: string;
  isSelected: boolean;
  isHidden: boolean;
  onLinkClick: () => void;
}

const linkIconsOutlined: Record<string, ReactNode> = {
  Dashboard: <RectangleGroupIcon className="w-7 h-7" color="#9499A5" />,
  Market: <ChartBarIcon className="w-7 h-7" color="#9499A5" />,
  News: <NewspaperIcon className="w-7 h-7" color="#9499A5" />,
};

const linkIconsFilled: Record<string, ReactNode> = {
  Dashboard: <RectangleGroupIconFilled className="w-7 h-7" color="#1B4BF1" />,
  Market: <ChartBarIconFilled className="w-7 h-7" color="#1B4BF1" />,
  News: <NewspaperIconFilled className="w-7 h-7" color="#1B4BF1" />,
};

const SidebarLink = ({ title, isSelected, isHidden, onLinkClick }: Props) => {
  return (
    <Flex
      justify="start"
      align="center"
      className={`gap-4 w-full px-4 py-2 rounded-xl ${
        isSelected ? "bg-[#F8F9FD]" : "bg-transparent"
      } hover:bg-[#F8F9FD] cursor-pointer`}
      onClick={onLinkClick}
    >
      {isSelected ? linkIconsFilled[title] : linkIconsOutlined[title]}
      <Text
        size="3"
        className={`${
          isSelected ? "text-[#616269] font-bold" : "text-[#9499A5]"
        }`}
      >
        {!isHidden && title}
      </Text>
    </Flex>
  );
};

export default SidebarLink;
