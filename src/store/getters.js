/**
 * Created by wdy on 2018/1/12.
 */
const getters = {
  count: state => state.home.count - 10,
  userDetail: state => state.home.userDetail
}
export default getters
