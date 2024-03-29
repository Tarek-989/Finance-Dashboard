export interface GetProductsResponse {
	id: string;
	_id: string;
	__v: number;
	price: number;
	expense: number;
	transactions: Array<string>;
	createdAt: string;
	updatedAt: string;
}
export interface GetTransactionsResponse {
	id: string;
	_id: string;
	__v: number;
	buyer: number;
	amount: number;
	productIds: Array<string>;
	createdAt: string;
	updatedAt: string;
}
export interface GetKpisResponse {
	id: string;
	_id: string;
	__v: number;
	totalProfit: number;
	totalRevenue: number;
	totalExpenses: number;
	expensesByCategory: ExpensesByCategory;
	monthlyData: Array<Month>;
	dailyData: Array<Day>;
	createdAt: string;
	updatedAt: string;
}

export interface Day {
	_id: string;
	id: string;
	date: string;
	revenue: number;
	expenses: number;
}

export interface ExpensesByCategory {
	salaries: number;
	supplies: number;
	services: number;
}

export interface Month {
	_id: string;
	id: string;
	month: string;
	revenue: number;
	expenses: number;
	operationalExpenses: number;
	nonOperationalExpenses: number;
}