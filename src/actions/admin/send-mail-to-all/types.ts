import { z } from "zod";
import { ActionState } from "@cc/lib/create-safe-action";
import { SendMailToAll } from "./schema";

type Message = {
  title: string;
  message: string;
};

export type InputType = z.infer<typeof SendMailToAll>;
export type ReturnType = ActionState<InputType, Message>;
