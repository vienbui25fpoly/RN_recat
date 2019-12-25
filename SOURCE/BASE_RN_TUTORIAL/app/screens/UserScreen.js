import React, { Component } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    Image,
    StyleSheet
} from 'react-native'
import R from '~/assets/R'

export default class UserScreen extends Component {
    render() {
        return (
            <SafeAreaView
                style={styles.container}
            >
                <View
                    style={styles.user_info_block}
                >
                    <Image
                        style={styles.profile_picture}
                        source={require('../assets/images/ic_default_user.png')}
                    />
                    <View
                        style={styles.box}
                    >
                        <View
                            style={{
                                width: '100%',
                                flexDirection: 'row',
                            }}
                        >
                            <Text
                                style={styles.text_block}
                            >Nguyễn Thị Thu Phương</Text>
                            <Text
                                style={styles.text_block_2}
                            >Đại lý</Text>
                        </View>
                        <Text
                            style={styles.text_block_1}
                        >Chỉnh sửa thông tin</Text>
                    </View>


                </View >
                <View style={styles.view_func}>

                    {this._getFuncBlock("Đơn hàng", R.images.ic_default_user)}
                    {this._getFuncBlock("Cửa hàng", R.images.ic_cuahang)}
                    {this._getFuncBlock("Lịch sử giao dịch", R.images.ic_lichsu)}
                    {this._getFuncBlock("Trở thành đại lý", R.images.ic_daily)}
                    {this._getFuncBlock("Thông tin bảo hành", R.images.ic_baohanh)}
                    {this._getFuncBlock("Thông tin về Daiichi", R.images.ic_daiichi)}
                    {this._getFuncBlock("Đăng xuất", R.images.ic_dangxuat, true)}
                </View>
                <View style={styles.view_tichluy}>
                    <View style={styles.diem_tich_luy}>
                        <Text style={styles.diem} style={styles.diem}>Điểm  tích lũy:</Text>
                        <Text style={styles.diem1}>1200</Text>
                    </View>
                    <Image
                        style={styles.img_tich_luy}
                        source={R.images.ic_default_user}
                    />
                    <Image
                        style={styles.img_mau}
                        source={R.images.ic_default_user}
                    />
                    <Text style={styles.text_1}>
                        Bạn đang là thành viên Bạc của Daiichi
                            </Text>
                    <Text style={styles.text_2}>
                        Quyền lợi:
                            </Text>
                    <View style={styles.text_3}>
                            <Text style={styles.text}>Chiết khấu 5% khi mua sản phẩm </Text>
                            <Text style={styles.text}>Có nhiều ưu đãi và chương trình </Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
    _getFuncBlock(title, imageavatr, isline = false) {
        return (
            <View>
                <View style={styles.box_1} >
                    <Image style={styles.img_func}
                        source={imageavatr}
                    />
                    <Text style={styles.text_donhang}>
                        {title}
                    </Text>
                    <Image style={styles.img_back}
                        source={R.images.ic_back}
                    />

                </View>
                {!isline && <View style={styles.line}></View>}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF'
    },
    user_info_block: {
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    text_block_2: {
        textAlignVertical: "center",
        textAlign: 'center',
        backgroundColor: '#EA4335',
        marginRight: 10,
        paddingHorizontal: 9,
        paddingVertical: 3,
        fontSize: 17,
        borderRadius: 10,
        overflow: 'hidden',
        color: 'white',
        fontFamily: 'Roboto-Regular'
    },
    profile_picture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 25,
        marginVertical: 12,
        marginRight: 11
    },
    text_block_1: {
        fontSize: 14,
        color: '#707070',
        fontFamily: 'Roboto-Regular'
    },
    text_block: {
        flex: 1,
        fontSize: 18,
        color: '#000000',
        fontFamily: 'Roboto-Regular'
    },
    box: {
        flex: 1,
        justifyContent: 'center',
    },
    box_1: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 12,
        marginLeft: 30,
        marginRight: 27,


    },
    img_back: {
        height: 18,
        width: 10
    },
    view_func: {
        marginTop: 5,
        marginBottom: 9,
        backgroundColor: 'white'
    },

    img_func: {
        width: 22,
        height: 22,
        resizeMode: 'contain'
    },
    text_donhang: {
        marginLeft: 17,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        flex: 1
    },
    line: {
        marginLeft: 30,
        marginRight: 27,
        height: 2,
        backgroundColor: '#8B8B8B'
    },
    view_tichluy: {
        marginBottom: 5,
        marginTop: 2,
        backgroundColor: 'white'
    },
    diem_tich_luy: {
        marginTop: 6,
        marginLeft: 123,
        marginRight: 123,
        alignItems: 'center',
        flexDirection: 'row',

    },
    diem: {
        color: '#EA4335',
        fontSize: 14,
        fontFamily: 'Roboto-Regular'
    },
    diem1: {
        color: '#EA4335',
        fontSize: 18,
        fontFamily: 'Roboto-Medium'
    },
    img_tich_luy: {
        marginRight: 22,
        marginTop: 5,
        marginLeft: 22,
        width: 331,
        height: 41,
        alignItems: 'center'
    },
    img_mau: {
        marginRight: 98,
        marginTop: 5,
        marginLeft: 97,
        width: 180,
        height: 24,
        alignItems: 'center'
    },
    text_1: {
        marginRight: 68,
        marginTop: 5,
        marginLeft: 67,
        fontSize: 14,
        fontFamily: 'Roboto-Regular',
        color: '#000000',
        alignItems: 'center',
        width:240,
        height:19
    },
    text_2: {
        marginRight: 157,
        marginTop: 5,
        marginLeft: 158,
        fontSize: 14,
        fontFamily: 'Roboto-Medium',
        color: '#000000',
        alignItems: 'center',
        width:90,
        height:19
    },
    text_3: {
        marginRight: 77,
        marginTop: 5,
        marginLeft: 77,
        
    },
    text:{
        fontSize: 14,
        fontFamily: 'Roboto-Regular',
        color: '#000000',
        alignItems: 'center',
        width:221,
        height:43
    }
})