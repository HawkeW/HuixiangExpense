## 项目简介

本项目主要提供记账、账单共同维护等功能。

用户可以在发布消费记录，并同步至自己参与的任意账单中。

通过账单记录，控制自己的支出，从而实现自己储备目标等。

**账单权限：**

- 用户拥有**一个个人账单（随用户注册创建）**和**多个公共账单**。
- 账单创建人：可以对所有账单进行记录、修改等，具有完整权限
- 账单参与者：可以添加、删除自己的消费记录。

**账单概述：**

- 账单分为个人账单和公共账单。
- 每笔账单在后台对应唯一id。
- 每笔账单包含多条支出信息，个人账单只能一个用户维护，公共账单可以由多个用户共同维护
- 个人账单可以看到各个支出对应的账单，公共账单无法看到对应支出对应的所有账单

**支出记录**：

- 每笔支出记录对应后台唯一id
- 一笔支出记录可以对应多个账单
- 用户的每笔支出记录可以有选择的发布到有权限的任意账单

## 概述

### 基本构成

- 项目主要为移动端

- 1.0版移动端主要包含支出记录、账单管理、账单详情三个界面

### 接口规范

- 采用RESTful API（URL定位资源，HTTP请求类型描述操作）
- 请求体采用JSON形式传输（Content-"type":application/json）

**(注：在v1.0版旨在实现最核心的功能——移动端账单记录和概览)**

### 页面构成

#### 首页

- 首页显示用户近期支出记录，
- 支出记录做分页显示，暂定每页20条。可无限上划，获取下一页消费记录
- 每条消费记录由icon，支出时间，支出金额，支出原因，支出分类，所属账单等构成
- 点击删除按钮，可以快速删除该条记录。同时其对应的账单中的该条消费记录也将被删除。
- 点击消费记录其它部分，将弹出修改页面。修改页面同添加页面。

![01-index](https://hawkew.github.io/assets/img/04-huixiang-api/01-index.png?raw=true)

- 在首页和账单页，点击加号icon将进入添加数据页面
- 添加数据页位于页面下方，可以选择分类、icon、支出原因、支出金额，同时包含日期选择框（默认当前日期）和账单选择按钮。
- 点击“对应账单”，进入账单选择页面。点击“日期输入框”，进入日期选择页面。

![02-add-expense](https://hawkew.github.io/assets/img/04-huixiang-api/02-add-expense.png?raw=true)

**添加/修改支出数据**

![03-select-bills](https://hawkew.github.io/assets/img/04-huixiang-api/03-select-bills.png?raw=true)

**选择账单**

![04-select-date](https://hawkew.github.io/assets/img/04-huixiang-api/04-select-date.png?raw=true)

**日期选择**

#### 账单汇总页

- 显示用户参与的账单
- 每条账单记录中显示账单对应的总支出情况。包括所有支出、月支出、日支出

![05-bills-list](https://hawkew.github.io/assets/img/04-huixiang-api/05-bills-list.png?raw=true)

**用户账单**

- 点击右上角+，创建或者加入新的账单

![06-add-bill](https://hawkew.github.io/assets/img/04-huixiang-api/06-add-bill.png?raw=true)

**添加账单**

![07-create-bill](https://hawkew.github.io/assets/img/04-huixiang-api/07-create-bill.png?raw=true)

**创建一个账单**

![08-join-bill](https://hawkew.github.io/assets/img/04-huixiang-api/08-join-bill.png?raw=true)

**通过邀请码加入一个账单**

#### 账单详情页

- 显示账单详情内的消费记录

- 点击账单可以进入账单详情。账单详情与首页类似。右上角有省略号icon，点击进行账单的基本管理。

- 在公共账单中需要对用户权限进行判断。账单权限氛围管理员（admin）和用户（user）两种。

  ![09-bill-details](https://hawkew.github.io/assets/img/04-huixiang-api/09-bill-details.png?raw=true)

  **账单详情**

  **账单管理**
  
  - 点击导航栏省略号可以进行简单的账单管理
- 有admin权限的用户可以进行【账单成员查看】、【获取邀请码】、【退出账单】操作
  - user权限的用户只能进行【退出账单】操作

  ![10-bill-manage](https://hawkew.github.io/assets/img/04-huixiang-api/10-bill-manage.png?raw=true)

  **账单的简单管理**

  **账单中的数据修改/添加**
  
- 账单中的修改内，会有[ 提交用户栏 ]和[用户头像]，显示数据的来源
  - user权限的用户只能修改用户本人提交的数据。
  - user本人提交的数据，将会自动同步至个人账单。
  - admin用户可以对账单中的所有数据进行修改。
  - admin用户修改的数据，将同步到消费记录对应用户的账单中。
  - 账单内成员可以随意查看账单详情

![11-add-modify-in-bill](https://hawkew.github.io/assets/img/04-huixiang-api/11-add-modify-in-bill.png?raw=true)

**账单中添加/修改数据**

- 点击账单详情右上角省略号，可以获取账单邀请码，邀请成员加入

#### 我的

- 用户页面主要显示的是数据消费的汇总情况。

![12-user-page](https://hawkew.github.io/assets/img/04-huixiang-api/12-user-page.png?raw=true)

**用户页面**

## 用户

### 基本接口

#### 注册

##### 一、功能描述

注册

##### 二、请求URI

POST   ` /bills/register`

##### 三、请求参数

| 名称     | 类型   | 说明   |
| :------- | :----- | :----- |
| userName | String | 用户名 |
| email    | String | 邮箱   |
| password | String | 密码   |

##### 四、请求示例

**请求值：**`Object`

```js
{

	"userName":"小明",

	"email": "123456@qq.com",

	"password":"123456"

}
```

**返回值：**

```js
{

	"status":"200",

	"message":"注册成功"

}
```

#### 登录

##### 一、功能描述

登录

##### 二、请求URI

POST    `/bills/login`

##### 三、请求参数

| 名称     | 类型   | 说明 |
| :------- | :----- | :--- |
| email    | String | 邮箱 |
| password | String | 密码 |

##### 四、请求示例

**请求值：**Object

```js
{
	"email": "123456@qq.com",
	"password":"123456"
}
```

**返回值：**

**成功：**

```js
{
	"status":"200",
	"message":"登录成功",    
	"data":{
		"userId":"0001",
		"userName":"小明",
	}
}
```

**失败：**

1. 密码错误

```js
{

	"status":"500",

	"message":"密码错误"

}
```

2. 邮箱未注册

```js
{

	"status":"500",

	"message":"邮箱未注册"

}
```

### 查询

#### 账单成员查询

##### 一、功能描述

查询某账单的参与人员及其成员的权限

##### 二、请求URI

Get    /bills/users/{billId}

##### 三、请求参数

| 名称   | 类型   | 说明   |
| :----- | :----- | :----- |
| billId | String | 账单id |

##### 四、请求示例

**请求值： **

`users/0123`

**返回值：**

```js
{
	"status":"200",
	"message":"",
	"data":{
		members:[
			{
				"userId":"0001", //用户id
				"userName":"小明"  //用户名
				authroity:"admin"
			},
			{
				"userId":"0002",
				"userName":"小黄"
				authroity:"user"
			}
		]
	}
}
```

## 账单数据

### 分类

#### 获取分类

##### 一、功能描述

注册

##### 二、请求URI

Get     /categories

##### 三、请求参数

无

##### 四、请求示例

**返回值**

```js
{
	"status":"200",
	"message":"查询成功",
	"data":[
		{
			"categoryId":"1",
			"categoryName":"生活"
			"startDate":"2020-05-04",
			"endDate": null,
			"type":"user"
		}
	]
}
```

### 账单

#### 创建新账单

##### 一、功能描述

创建新的账单

##### 二、请求URI

POST    `/bills/createBill`

##### 三、请求参数

| 名称     | 类型   | 说明     |
| :------- | :----- | :------- |
| userId   | String | 用户ID   |
| billName | String | 账单名称 |

##### 四、请求示例

**请求地址**：

**请求值：**Object

```js
{
	"userId": "0001",
	"billName":"家庭账单"
}
```

**返回值：**

```js
{
	"status":"200",
	"message":"创建成功",
	"data":{
		"billId":"0123",
		"billName":"家庭账单",
		"startDate":"2020-05-21 08:00",
		"authority":"admin"
	}
}
```

#### 账单查询（List）

##### 一、功能描述

查询用户账单列表或记账数据对应的账单

##### 二、请求URI

POST    `/bills`

##### 三、请求参数

| 名称      | 类型    | 说明                 |
| :-------- | :------ | :------------------- |
| userId    | String  | 用户ID               |
| expenseId | String  | 记账数据Id，可选参数 |
| pageNum   | Integer | 分页序号             |
| pageSize  | Integer | 分页大小             |

##### 四、请求示例     

**请求值：**

GET    `/bills?userId=0001&expenseId=&pageNum=1&pageSize=20`

**返回值：**

```js
{
	"status":"200",
	"message":"OK",
	"data":{
		"billList":[ //账单列表
			{
				"billId": "001",   //账单id
				"billName":"家庭支出"，  //账单名称
				"startDate":"2020-04-01 08:00", //账单创建时间
				"expense": 50 //账单金额,
				"authority":"admin"
			},
			{
				"billId": "002",   //账单id
				"billName":"买车"，  //账单名称
				"startDate":"2020-04-01 08:00", //账单创建时间
				"expense": 100000, //账单金额
				"authority":"user"
			}
		],
		"total": 2,
     	"size": 2,
		"current": 1,
		"pages": 1,
		"orders": [],
		"hitCount": false,
   		"searchCount": true
	}
}
```

#### 账单查询（One）

##### 一、功能描述

查询账单中的支出数据

##### 二、请求URI

Get    `bills/payouts`

##### 三、请求参数

| 名称     | 类型    | 说明     |
| :------- | :------ | :------- |
| billId   | String  | 账单id   |
| userId   | String  | 用户id   |
| pageNum  | Integer | 分页序号 |
| pageSize | Integer | 分页大小 |

##### 四、请求示例

`bills/payouts?billId=01123&userId=0001&pageNum=1&pageSize=20`

**返回值：**

```js
{
	"status":"200",
	"message":"OK",
	"data":{
		"billId": "123",
		"billName":"家庭开支",
		"authority": "admin", //用户在该账单的权限 "admin"/"user"
		"expenses":[
			{
				"expenseId": 001,  //支出数据id
				"userId":"0001",  //支出记录人id
				""userName":":"小明"  //支出记录人用户名
				"date":"2020-04-01 08:00", //支出时间
				"amount": 5, //支出金额
				"reason": "晚餐", //支出原因
				"category": "生活", //原因对应的类目
				"icon":"home"//icon 名称
				]
			},
			{
				"expenseId": "001",  //支出数据id
				"userId":"0001",  //支出记录人id
				""userName":":"小明"  //支出记录人用户名
				"date":"2020-04-01 08:00", //支出时间
				"amount": 5, //支出金额
				"reason": "晚餐", //支出原因
				"category": "生活", //原因对应的类目
				"icon":"home"//icon 名称
			}
		],
		"total": 2,
     	"size": 2,
		"current": 1,
		"pages": 1,
		"orders": [],
		"hitCount": false,
   		"searchCount": true
	}
}
```

### 互动

#### 获取账单邀请码

##### 一、功能描述

获取账单加入码，用户可以通过邀请码加入此账单

##### 二、请求URI

Get  `/bills/getInvitationCode`

##### 三、请求参数

| 名称   | 类型   | 说明   |
| :----- | :----- | :----- |
| billId | String | 账单id |
| userId | String | 用户id |

##### 四、请求示例

**请求值：**

Get  `/bills/getInvitationCode?billId=0001&userId=0001`

**返回值：**

```js
{
	"status":"200",
	"message":"OK",
	"data":{
		invitationCode: "asda123" //账单邀请码
	}
}
```

#### 通过邀请码加入账单

##### 一、功能描述

通过邀请码加入账单

##### 二、请求URI

POST    `/bills/joinBill`

##### 三、请求参数

| 名称           | 类型   | 说明       |
| :------------- | :----- | :--------- |
| billId         | String | 账单id     |
| userId         | String | 用户id     |
| invitationCode | String | 账单邀请码 |

##### 四、请求示例

**请求值：**

`/bills/joinBill?billId=0001&userId=0001&invitationCode=asda123`

**返回值：**

```js
{
	"status":"200",
	"message":"成功加入账单",
}
```

#### 退出账单

##### 一、功能描述

退出自己参与的账单

##### 二、请求URI

POST    `/bills/exitBill`

##### 三、请求参数

| 名称   | 类型   | 说明   |
| :----- | :----- | :----- |
| billId | String | 账单id |
| userId | String | 用户id |

##### 四、请求示例

**请求值：**

`/bills/joinBill?billId=0001&userId=0001`

**返回值：**

```js
{
	"status":"200",
	"message":"成功退出账单",
}
```

### 记账数据

#### 添加支出数据(One)

##### 一、功能描述

批量添加支出数据（一条或多条）到指定账单（一个或者多个）

##### 二、请求URI

POST    `bills/payouts/create`

##### 三、请求参数

| 名称     | 类型   | 说明                   |
| :------- | :----- | :--------------------- |
| userId   | String | 用户id                 |
| expenses | Object | 支出数据               |
| billId   | Array  | 支出要添加的目标账单id |

**请求值：**Object

```js
{
	"userId":"0001", 
	"expenses": [
		{
			"expenseDate":"2020-04-01 08:00", //支出时间
			"expenseAmount": 5, //支出金额
			"expenseReason": "晚餐", //支出原因
			"expenseCategory": "生活", //原因对应的类目
			"icon":""
		}
	]，
	"billId":[    //支出要添加的账单id列表
		"0001",   //账单id
	]
}
```

**返回值：**

```js
{
	"status":"200",
	"message":"添加成功"
}
```

#### 更新支出数据

##### 一、功能描述

更新一条支出数据

##### 二、请求URI

POST    `/bills/payouts/update`

##### 三、请求参数

| 名称     | 类型   | 说明                        |
| :------- | :----- | :-------------------------- |
| userId   | String | 用户id                      |
| expenses | Array  | 支出数据，单个或者批量      |
| billIds  | Array  | 支出要添加/修改的账单id列表 |

**请求值：**`Object`

```js
{
	"userId":"0001",
	"expense":
		{
			"expenseDate":"2020-04-01 08:00", 
			"expenseAmount": 5, 
			"expenseReason": "晚餐", 
			"expenseCategory": "生活",
			"icon":""
		},
	"billId":[  
		"0001", 
	],
}
```

**返回值：**

成功：

```js
{
	"status":"200",
	"message":"添加成功"
}
```

错误：

```js
{
	"status":"500",
	"message":"没有权限",
	"billids":[    //账单id列表
		"0001",   //账单id
	],
}
```

#### 删除数据

##### 一、功能描述

删除某条支出数据

##### 二、请求URI

Delete   `/bills/payouts`

##### 三、请求参数

| 名称      | 类型   | 说明       |
| :-------- | :----- | :--------- |
| userId    | String | 用户id     |
| expenseId | String | 消费记录id |
| billids   | Array  | 账单id列表 |

从账单中删除：

**请求值：**Object

```js
{
	"userId":"0001", 
	"expenseId": "ac1123",
	"billids":[    //账单id列表
		"0001",   //账单id
		"0002"
	],
}
```