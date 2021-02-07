import React,{Component} from 'react'
import {View,Text,Image} from 'react-native'
import {connect} from 'react-redux';
import {deleteUser} from 'redux-store/actions/user';
import {styles} from './home.styles'
import CustButton from 'components/button';
class Home extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             userInfo:'',
        }
        console.log('props',props)
    }
    Logout =()=>{
        this.props.deleteUser()
        this.props.navigation.navigate('Auth')
    }
   
    render(){
    return(
        <View style={styles.container}>
            <Image source={require('assets/user.png')}style={styles.userProfile}/>
            <Text style={styles.welcomeMsg}>Welcome</Text>
            <Text style={styles.userText}>{this.props.user.userDetails.toUpperCase()}</Text>

            <CustButton
            name="Logout"
            onSave={()=>this.Logout()}
            />
        </View>
    )
}
}
const mapStateToProps = state => ({
    user: state.user,
  });
export default connect(mapStateToProps,{deleteUser})(Home)