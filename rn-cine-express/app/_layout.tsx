import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Menú" }} />
      <Stack.Screen name="products" options={{ title: "Cartelera" }} />
      <Stack.Screen name="math-trapecio" options={{ title: "Combos" }} />
      <Stack.Screen name="math-total" options={{ title: "Tickets" }} />
    </Stack>
  );
}