import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MenuButton from "../src/components/MenuButton";

export default function MenuScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cine Express</Text>
      <Text style={styles.subtitle}>Herramientas rápidas para taquilla y combos (Expo Router)</Text>

      <View style={{ gap: 12, marginTop: 14 }}>

        {/*<MenuButton
          title="1) Products (API)"
          subtitle="Lista paginada desde /products/"
          onPress={() => router.push("/products")}
        />*/}

        <MenuButton
          title="1) Cartelera (API + fotos) "
          subtitle="API"
          onPress={() => router.push("/products")}
        />

        <MenuButton
          title="2) Total de entradas"
          subtitle="Tickets"
          onPress={() => router.push("/math-total")}
        />

        <MenuButton
          title="3) Combo snacks"
          subtitle="Combos"
          onPress={() => router.push("/math-trapecio")}
        />


      </View>

      <Text style={styles.note}>
        Tip: Cada pantalla practica estado, inputs y cálculos simples.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f6f7fb" },
  title: { fontSize: 24, fontWeight: "900", alignContent:"center"},
  subtitle: { marginTop: 4, color: "#555", fontWeight: "700" },
  note: { marginTop: 18, color: "#1976d2", fontWeight: "800" },
});