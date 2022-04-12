import { connect } from 'react-redux'
import AdminDashBoard from '../pages/AdminDashBoard'

const mapStateToProps = (state: any) => ({
    data: state.cardItems
})

const mapDispatchToProps = (dispatch: any) => ({
    // addToCartHandler: (data: any)=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(AdminDashBoard)   