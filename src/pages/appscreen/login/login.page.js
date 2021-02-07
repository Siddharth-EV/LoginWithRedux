import React, {Component} from 'react';
import {View, TouchableOpacity, Text,Keyboard} from 'react-native';
import CustButton from 'components/button';
import CustTextField from 'components/textfield';
import {connect} from 'react-redux';
import {setUser} from 'redux-store/actions/user';
class Login extends Component {
     constructor(props) {
       super(props)
       this.passwordRef = React.createRef();
       this.state = {
          userName:'',
          password:'',
          userNameError:'',
          passError:'',
       }
     }
     emailChange =value =>{
       console.log('v',value)
       this.setState({userName:value,userNameError:''})
     }
     passChange =value =>{
      console.log('p',value)
       this.setState({password:value,passError:''})
     }
     onsignIn =()=>{
       if(!this.state.userName){
         this.setState({userNameError:'Enter Username'})
         return
       }
       if(!this.state.password){
          this.setState({passError:'Enter password'})
          return
       }
       const {userName,password} = this.state
       this.props.setUser(userName,password)
       this.props.navigation.navigate('Home')
     }

  render() {
    const {userName,password,userNameError,passError} =this.state
    return (
      <View style={{flex:1,justifyContent:'center',paddingLeft:'10%',paddingRight:'10%',backgroundColor:'#cee4f5'}}>

      
      <CustTextField
        placeholder="Username"
         value={userName}
         onChange={this.emailChange}
         error={userNameError}
        onSubmitEditing={() => this.passwordRef.current.focus()}
        />
        <CustTextField
        inputRef={this.passwordRef}
        placeholder="Password"
         value={password}
         error={passError}
         onChange={this.passChange}
         secureTextEntry={true}
        onSubmitEditing={() => Keyboard.dismiss()}
        />
        <CustButton name="Sign In"
        onSave={()=>this.onsignIn()}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user,
});
export default connect(mapStateToProps,{setUser})(Login);
