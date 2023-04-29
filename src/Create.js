import React, { useEffect } from 'react'
import {Text, TextInput, View,StyleSheet,ScrollView, StatusBar, TouchableOpacity} from 'react-native'

const Create = () =>{

    useEffect(()=>{
        AddNewProduct();

    },[])

    const AddNewProduct=()=>{
        fetch('https://dummyjson.com/products/add',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({
                title:'Development',
                id:"1",
                name:"Brijesh",
            })
        })
        .then(res => res.json())
        .then(res => {
            console.log('data--',res)
           // setData(res.products);
        })
       

    }



    return(
        <ScrollView>
            <View style={styles.MainView}>
                
                <StatusBar barStyle='light-content' backgroundColor='skyblue'/>
                
                <Text style={{marginTop:30,fontSize:25,fontWeight:'bold',color:'white',textAlign:'center'}}>
                    Welcome To Login 
                </Text>
                <View style={styles.TextLoginView}>
                    <Text style={{textAlign:'left',fontSize:16,fontWeight:'bold',marginLeft:20,color:'white'}}> 
                        SIGN IN
                    </Text>
                </View>
                
                <View style={styles.MainInputView}>
                    <TextInput
                    style={styles.inputView}
                    placeholder='Enter Your Email'
                    placeholderTextColor='black'
                    />
                </View>
                <View style={styles.MainInputView}>
                    <TextInput
                    style={styles.inputView}
                    placeholder='Enter Your Password'
                    placeholderTextColor='black'
                    />
                </View>
                
                <View style={styles.LoginBtn}>                
                <TouchableOpacity style={styles.button} >
                    <Text style={{textAlign:'center',color:'white',fontSize:16,fontWeight:'bold'}}>
                        LOGIN
                    </Text>
                    
                </TouchableOpacity>
                </View>
                <View style={styles.forgotView}>
                <TouchableOpacity style={styles.button} >
                    <Text style={{fontWeight:'bold',color:'white',fontSize:16,textAlign:'center'}}>
                        FORGOT PASSWORD?
                    </Text>
                    </TouchableOpacity>

                </View>
                <View style={{marginTop:20}}>
                    <Text style={{textAlign:'center',fontSize:16,fontWeight:'bold',color:'white'}}> 
                        OR
                    </Text>
                </View>

                <View style={styles.socialView}>
                    <View style={styles.imageView}>
                        {/* <Image source={require('./img/facebook.png')} style={{height:40,width:40,borderRadius:20,}}/> */}
                    </View>
                    <View sstyle={styles.imageView}>
                    {/* <Image source={require('./img/gplus.png')} style={{height:40,width:40,borderRadius:20}}/> */}
                    </View>
                    <View style={styles.imageView}>
                    {/* <Image source={require('./img/linkedin.png')} style={{height:40,width:40,borderRadius:20}}/> */}
                    </View>
                    <View style={styles.imageView}>
                    {/* <Image source={require('./img/twitter.png')} style={{height:40,width:40,borderRadius:20,}}/> */}
                    </View>

                </View>
                
                <View style={{marginBottom:20,flexDirection:'row',justifyContent:'center',}}>
                    <Text style={{textAlign:'center',fontSize:16,fontWeight:'bold',color:'white',marginRight:10}}> 
                        New User?
                    </Text>
                    <Text style={{textAlign:'center',fontSize:16,fontWeight:'bold',color:'#2974FA'}}> 
                        SignUp
                    </Text>
                </View>
                

                
                
            </View>
            
            </ScrollView>
    )

}

const styles=StyleSheet.create({
    MainView:{
        flex:1,
        backgroundColor:'skyblue',
    },
    TextLoginView:{
        marginTop:120,
    },

    MainInputView:{
      marginTop:30,
      flexDirection:'column',
      marginLeft:20,
      marginRight:20,
        
    },
    inputView:{
        height:50,
        borderWidth:1,
        borderRadius:6,
        borderColor:'white',
        paddingLeft:12,
        backgroundColor:'white',
        fontSize:15,

    },
    LoginBtn:{
     
        height:50,      
        marginLeft:20,
        marginRight:20,
        marginTop:30,
        borderRadius:6,
    },
    button: {
        width: '100%',
        height: 50,
      },
      gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 6
      },
      forgotView:{
          marginTop:15,
          justifyContent:'center',
          alignItems:'center'
      },
      socialView:{
        flex:1,
        flexDirection:'row',
        marginTop:10, 
       justifyContent:'space-between',
      // alignItems:'center',
        margin:50,
      //  flexWrap: 'wrap'
        //backgroundColor:'red',      
      },
      imageView:{
          height:40,
          width:40,
          borderRadius:20,
         // margin:10,

      }


})

export default Create;

