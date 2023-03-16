import { FlatList, View } from "react-native";
import { Link } from "expo-router";
import { Text } from "../ui/Text";
import { spots } from "../data/spot";
import { SpotItem } from "../ui/SpotItem";
import { SpotGrid } from "../ui/SpotGtid";

export default function Home() {
  console.log({ spots });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Link
        href={{
          pathname: "/[spot]",
          params: { spot: "123" },
        }}
        // href={"/modal"}
      >
        <SpotGrid spots={spots} />
      </Link>
    </View>
  );
}
