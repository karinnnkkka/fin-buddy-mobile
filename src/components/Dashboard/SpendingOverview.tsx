import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, TrendingUp, DollarSign } from "lucide-react";

const SpendingOverview = () => {
  // Mock data - will be replaced with real data later
  const monthlyData = {
    income: 2400,
    expenses: 1850,
    balance: 550,
    trend: 5.2 // percentage change
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-primary" />
          Monthly Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center p-4 bg-success/10 rounded-lg">
            <p className="text-sm text-muted-foreground">Income</p>
            <p className="text-2xl font-bold text-success">${monthlyData.income}</p>
          </div>
          <div className="text-center p-4 bg-destructive/10 rounded-lg">
            <p className="text-sm text-muted-foreground">Expenses</p>
            <p className="text-2xl font-bold text-destructive">${monthlyData.expenses}</p>
          </div>
        </div>
        
        <div className="text-center p-4 bg-primary/10 rounded-lg">
          <p className="text-sm text-muted-foreground">Balance</p>
          <div className="flex items-center justify-center gap-2">
            <p className="text-2xl font-bold text-primary">${monthlyData.balance}</p>
            <div className="flex items-center gap-1 text-success">
              <TrendingUp size={16} />
              <span className="text-sm font-medium">+{monthlyData.trend}%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpendingOverview;