"use client";
import { Select } from "@radix-ui/themes";

const SelectComponent = () => {
  return (
    <Select.Root defaultValue="all">
      <Select.Trigger />
      <Select.Content>
        <Select.Item value="all">Trending</Select.Item>
        <Select.Item value="tech">Tech</Select.Item>
        <Select.Item value="us">US</Select.Item>
        <Select.Item value="europe">Europe</Select.Item>
        <Select.Item value="finance">World</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};

export default SelectComponent;
