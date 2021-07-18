// 类型别名常用于联合类型。
type Name = string; 
const testName:Name = 'name'
const testName1=()=>'testName'

type xx = ReturnType<typeof testName1>

const xxReturn:xx =1
const xxReturn1:xx ='1'