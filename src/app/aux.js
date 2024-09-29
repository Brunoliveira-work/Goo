"use server";
import { redirect } from "next/navigation";

export default async function handleClick() {
  redirect('/abas/search'); // Redireciona diretamente
}
