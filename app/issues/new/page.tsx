"use client";
import React from "react";
import { Button, TextArea, TextField } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Issue Title" />
      </TextField.Root>
      <TextArea placeholder="Description"></TextArea>
      <Button>Summit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
