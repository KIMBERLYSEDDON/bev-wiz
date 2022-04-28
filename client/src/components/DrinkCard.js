import React from "react";
import { View, ScrollView, StyleSheet, Image, Alert } from "react-native";
import { Text, Card, Button, Icon } from "react-native-elements";

const drinkData = [
  {
    id: 1,
    name: "SomeDrink",
    percentage: "25%",
    image:
      "https://s3-alpha-sig.figma.com/img/ee05/2b1b/27f18b01866460a717dbb15e32686bb2?Expires=1650844800&Signature=O0taHYfNQD6E8oSTwXUCDJ9W65jDLnn1mHzOmCQ2oi~yIjsRLKKQ6578KBdkp4bZLnaks~CPpt9vf~It5xWBSj1NDiVvZSf0a-AmhpzTuMpcx7xdvlqYkYMSmq8e-glevuUreyKJMb49CEl5EJL6~NNu9TcK~8TdDBV8Oqa~BtjmEeG3dImJ21ed2rqYsKcRWUYsQknjNNpcQtHs7jZc63rlGBTqRLiGIty6UIEEc3jsgolz73-6SuWM7UYKNooUA0WNin8z7VpuhZCqoCaGlmGnHnAXkAeJq~00NJlMorF6cHscIqlSqqbSMij2nq00vmYoSBV7Ravre421GKdWzw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: 2,
    name: "SomeDrink2",
    percentage: "25%",
    image:
      "https://s3-alpha-sig.figma.com/img/e393/58be/f051d5dac14b48c3379362424fcc82d5?Expires=1650844800&Signature=gzOlA~KZuD516kQLAwED--B7ungmsVlAxl454GcCRsMwRxWAKQLS75ppcOaazHdNqVLDwyNcODD4jWeJV-fFcfcL8-0YUC1Ciq2T50bD47w1DCCJGCqwcUMoZRMzmU78i2-TNd-wDWqnZJliFdgQ0ZpYA6yaJKMmO427dCho519LaY0MGaDDMhRCORANg0yW0ktGNxDeO9Cn0vhhmx1iVgjRgIbHAip8zgyIwqfu4Hijgy3yYfBpJKxChU2ImC1AhKTIpwLp-8LO~5z31taCzPVdmXUBwURJjToO9CzZwIRoHLMhy~5P2UQCB7Nrs9LRq-YPQYs6vncIVRdP2POUlw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: 3,
    name: "SomeDrink3",
    percentage: "25%",
    image:
      "https://s3-alpha-sig.figma.com/img/03e9/ea75/ea9b513821a56454a880c8cc1df482ab?Expires=1650844800&Signature=dofriipBWfj7nDMzhCnOKlUUmnace15yEvMexo4ZyvGiWkV35jNw6EXyAEnP7f3LJ~5aR-45yK25-GubddVMilkZ0jbeQRkklVRqBSzovXW85pnvzs9e5eCH99NuIRUIkq~sk9MgVIZt4Ewkd4~SJNDSwgCZt1OaxF4u7hv2yea5xOv-SRcOQfWie190y0kuiLD--qjZ2csy~DWwF1-MPX~G7eJzt2fGEUPKRlSXHwhI~B--vsm4nkh841GUaF7PT45Y2TGVmRzB9JSHo4jDSDYiyZSTC1cJ3231p8vTaEDY4RIz4MeTKLXHMjdCSrHG27ffMimXliv9E68a81DNVw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: 4,
    name: "SomeDrink4",
    percentage: "25%",
    image:
      "https://s3-alpha-sig.figma.com/img/b92e/0050/739382943de5bd5526ab3bb1f4e7ed56?Expires=1650844800&Signature=P3cF2vMeo8NT8By~BYFEIcmJoSs4zRrNaHTbFdVj9koW9MJrQJIzhotUoJrkWoZQkOtFR0VaKpDMG5qMX1SdcFDM56xjsCLN-dHEq38p3PATysUyBLfmqwWTqCrymuZ0AFlh8QvlcVyrvXe1TRYbOWLR-Yf3dIDIvMZny~zQyAGGOpSTaVQ7KaxL9v1QHoFqDmN3uOzme6eE-kmN~79xgCffIYtPjcAK11-dFzr~2eKvm3UwI4D3ELmUmbHtgGqoHkR25Ns0xZvjcOZAXMAVECirPu1Qjp-sCkNsI1m~LnDHWMFJmkkoSXdaXgcZwxpijCQfMHh25f-2ZJzAroDIWQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
];

const DrinkCard = () => {
  const onButtonPress = () => {
    Alert.alert(`${new Date().toLocaleTimeString()} button press`);
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {drinkData.map(({ id, name, percentage, image }) => (
            <Card key={id}>
              <Card.Image
                style={{ padding: 0, height: 250 }}
                source={{ uri: image }}
              />
              <Text>{name + " " + percentage}</Text>
              <Button
                style={{ padding: 10, marginTop: 12 }}
                icon={
                  <Icon
                    name="code"
                    color="#ffffff"
                    iconStyle={{ marginRight: 10 }}
                  />
                }
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                }}
                title="VIEW NOW"
                onPress={onButtonPress}
              />
            </Card>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default DrinkCard;
