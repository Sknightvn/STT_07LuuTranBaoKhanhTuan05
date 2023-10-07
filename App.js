import { StatusBar } from 'expo-status-bar';
import { Button, TextInput } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
         colors = {["#FBCB00", "#BF9A00"]}
         style = {styles.background}
      ></LinearGradient>
      <StatusBar style="auto" />
      <View style={styles.view1}>
        <Text style={styles.text1}>LOGIN</Text>
      </View>
      <View style={styles.view2}>
        <View style={styles.image}>
          <img
            style={styles.imgAvatar}
            src={require("/assets/avatar_user.png")}
          ></img>
          <img
            style={styles.imgLock}
            src={require("/assets/lock.png")}
          ></img>
          <img
            style={styles.imgEye}
            src={require("/assets/eye.png")}
          ></img>
        </View>
        <TextInput style={styles.inputName}></TextInput>
        <Text style={styles.name}>Name</Text>
        <TextInput style={styles.inputPassword}></TextInput>
        <Text style={styles.password}>Password</Text>
      </View>
      <View style={styles.view3}>
        <Button style={styles.btnLogin} textColor='white'>LOGIN</Button>
      </View>
      <View style={styles.view4}>
        <Text style={styles.text2}>Forgot your password?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },

  view1: {
    position: 'absolute',
    width: "350px",
    height: "400px",
  },

  text1: {
    fontWeight: "700",
    fontSize: "30px",
  },

  view2: {
    position: 'absolute',
  },

  imgAvatar: {
    position: 'absolute',
    top: "10px",
    left:"10px",
  },

  imgLock: {
    position: 'absolute',
    top: "90px",
    left: "10px",
  },

  imgEye: {
    position: 'absolute',
    top: "90px",
    left: "280px",
  },

  inputName: {
    width: "330px",
    height: "54px",
    borderWidth: "1px",
    borderColor: "#F2F2F2",
    backgroundColor: "rgba(196, 196, 196, 0.30)",
  },

  name: {
    fontWeight: "400",
    fontSize: "18px",
    bottom: "40px",
    left: "60px",
    
  },

  inputPassword: {
    width: "330px",
    height: "54px",
    borderWidth: "1px",
    borderColor: "#F2F2F2",
    backgroundColor: "rgba(196, 196, 196, 0.30)",
  },

  password: {
    fontWeight: "400",
    fontSize: "18px",
    bottom: "40px",
    left: "60px",
  },

  view3: {
    position: 'absolute',
  },

  btnLogin: {
    top: "150px",
    width: "330px",
    backgroundColor: "#060000",
    borderRadius: "2px",
  },

  view4: {
    position: 'absolute',
  },

  text2: {
    fontWeight: "700",
    fontSize: "20px",
    top: "220px",
  },
});
