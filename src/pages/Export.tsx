import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import BottomNavigation from "@/components/Layout/BottomNavigation";
import { Download, FileText, FileSpreadsheet, Calendar, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Export = () => {
  const [selectedMonth, setSelectedMonth] = useState("2024-01");
  const [exportFormat, setExportFormat] = useState("pdf");
  const { toast } = useToast();

  const handleExport = (format: string) => {
    // Mock export - will be replaced with real export functionality
    toast({
      title: "Export Started",
      description: `Generating ${format.toUpperCase()} report for ${selectedMonth}...`,
    });
    
    // Simulate download
    setTimeout(() => {
      toast({
        title: "Export Complete",
        description: `Your ${format.toUpperCase()} report has been downloaded.`,
      });
    }, 2000);
  };

  const handleShare = () => {
    // Mock share - will be replaced with real sharing functionality
    toast({
      title: "Share Link Generated",
      description: "Your financial summary has been prepared for sharing.",
    });
  };

  const monthOptions = [
    { value: "2024-01", label: "January 2024" },
    { value: "2023-12", label: "December 2023" },
    { value: "2023-11", label: "November 2023" },
    { value: "2023-10", label: "October 2023" },
  ];

  // Mock summary data
  const summaryStats = {
    totalIncome: 2400,
    totalExpenses: 1850,
    balance: 550,
    transactionCount: 47
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Export Data</h1>
            <p className="text-primary-foreground/80">Download your financial reports</p>
          </div>
          <Button 
            variant="secondary" 
            size="sm"
            onClick={handleShare}
            className="bg-white/20 text-white border-0 hover:bg-white/30"
          >
            <Share2 size={16} />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Export Options */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download size={20} className="text-primary" />
              Export Options
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Month Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Select Month</label>
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {monthOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Export Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                onClick={() => handleExport("pdf")}
                className="flex flex-col items-center gap-2 h-auto py-4"
              >
                <FileText size={24} className="text-destructive" />
                <span>Export PDF</span>
              </Button>
              <Button 
                variant="outline" 
                onClick={() => handleExport("csv")}
                className="flex flex-col items-center gap-2 h-auto py-4"
              >
                <FileSpreadsheet size={24} className="text-success" />
                <span>Export CSV</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar size={20} className="text-primary" />
              Monthly Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-success/10 rounded-lg">
                <p className="text-sm text-muted-foreground">Total Income</p>
                <p className="text-lg font-bold text-success">${summaryStats.totalIncome}</p>
              </div>
              <div className="text-center p-3 bg-destructive/10 rounded-lg">
                <p className="text-sm text-muted-foreground">Total Expenses</p>
                <p className="text-lg font-bold text-destructive">${summaryStats.totalExpenses}</p>
              </div>
              <div className="text-center p-3 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground">Net Balance</p>
                <p className="text-lg font-bold text-primary">${summaryStats.balance}</p>
              </div>
              <div className="text-center p-3 bg-accent/10 rounded-lg">
                <p className="text-sm text-muted-foreground">Transactions</p>
                <p className="text-lg font-bold text-accent">{summaryStats.transactionCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sharing Options */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Share2 size={20} className="text-primary" />
              Share with Friends
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Share your financial progress anonymously or with friends for motivation and tips.
            </p>
            <div className="space-y-2">
              <Button variant="outline" className="w-full" onClick={handleShare}>
                Generate Shareable Link
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Personal details will be hidden when sharing
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className="bg-muted/50">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">💡 Export Tips</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• PDF reports include charts and are great for viewing</li>
              <li>• CSV files work best for importing into spreadsheet apps</li>
              <li>• Share summaries to get budgeting tips from friends</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Export;