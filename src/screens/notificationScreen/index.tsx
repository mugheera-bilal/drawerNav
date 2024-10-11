import { Button, Text, View } from "react-native";
import { styles } from "./styles";
import { FC } from "react";
import { INotification } from "../../../constants/interface";

const NotificationScreen : FC<INotification> = ({navigation}) => {
    
function openDrawerhandler () {
    navigation.toggleDrawer()
}

    return (
        <View style={styles}>
            <Text>Notification Screen</Text>
            <Button title="Open Drawer" onPress={openDrawerhandler}/>
        </View>
    )
}

export default NotificationScreen