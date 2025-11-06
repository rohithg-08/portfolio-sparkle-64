/**
 * Dashboard Page
 * 
 * Main user dashboard displaying:
 * - Welcome message with user name
 * - Statistics cards (portfolios, views, visitors)
 * - Recent portfolios list with actions
 * - Quick access to create new portfolio
 */

import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Eye, Edit, Trash2, TrendingUp, Users, BarChart } from "lucide-react";
import { Bar, BarChart as RechartsBarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const Dashboard = () => {
  // Mock data - will be replaced with API calls
  const portfolios = [
    { id: 1, title: "My Professional Portfolio", template: "Modern Minimal", lastEdited: "2 hours ago" },
    { id: 2, title: "Creative Showcase", template: "Creative Bold", lastEdited: "1 day ago" },
  ];

  // Sample data for the views chart - expanded to show a full month
  const viewsData = [
    { name: "1", views: 240 },
    { name: "2", views: 300 },
    { name: "3", views: 280 },
    { name: "4", views: 320 },
    { name: "5", views: 350 },
    { name: "6", views: 270 },
    { name: "7", views: 250 },
    { name: "8", views: 290 },
    { name: "9", views: 310 },
    { name: "10", views: 330 },
    { name: "11", views: 280 },
    { name: "12", views: 260 },
    { name: "13", views: 290 },
    { name: "14", views: 340 },
    { name: "15", views: 320 },
    { name: "16", views: 270 },
    { name: "17", views: 290 },
    { name: "18", views: 310 },
    { name: "19", views: 350 },
    { name: "20", views: 330 },
    { name: "21", views: 290 },
    { name: "22", views: 280 },
    { name: "23", views: 300 },
    { name: "24", views: 320 },
    { name: "25", views: 340 },
    { name: "26", views: 310 },
    { name: "27", views: 290 },
    { name: "28", views: 280 },
    { name: "29", views: 320 },
    { name: "30", views: 350 },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Poovi!</h1>
            <p className="text-muted-foreground">Manage your digital portfolios</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            New Portfolio
          </Button>
        </div>

<<<<<<< Updated upstream
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 hover:shadow-lg transition-all border-2 hover:border-primary/20">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-primary" />
=======
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 hover:shadow-lg transition-all border-2 hover:border-primary/20 sm:col-span-2 lg:row-span-2 h-full">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-10 h-10 text-primary" />
>>>>>>> Stashed changes
              <span className="text-xs text-muted-foreground">+24%</span>
            </div>
            <div className="flex flex-col gap-6 h-full">
              <div className="min-w-[120px]">
                <div className="text-5xl font-bold text-green-500 mb-2">1.2K</div>
                <p className="text-lg text-muted-foreground">Total Views</p>
              </div>
              <div className="h-60 w-full flex-grow">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart data={viewsData} margin={{ top: 10, right: 10, bottom: 20, left: 10 }}>
                    <XAxis 
                      dataKey="name" 
                      fontSize={12} 
                      tickLine={false} 
                      axisLine={true}
                      interval={2}
                      label={{ value: 'Days of Month', position: 'bottom', offset: 0 }}
                    />
                    <YAxis 
                      hide={false}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => value.toLocaleString()}
                      fontSize={10}
                      width={30}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                        border: 'none', 
                        borderRadius: '4px',
                        fontSize: '12px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                      }}
                      formatter={(value) => [`${value} views`, 'Views']}
                      labelFormatter={(label) => `Day ${label}`}
                      cursor={{ fill: 'rgba(0,0,0,0.05)' }}
                    />
                    <Bar 
                      dataKey="views" 
                      fill="hsl(var(--primary))" 
                      radius={[4, 4, 0, 0]} 
                      animationDuration={1500}
                      barSize={12}
                    />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>
          
          <div className="sm:col-span-1 flex flex-col gap-6">
            <Card className="p-6 hover:shadow-lg transition-all border-2 hover:border-primary/20">
              <div className="flex items-center justify-between mb-2">
                <BarChart className="w-8 h-8 text-primary" />
                <span className="text-xs text-muted-foreground">+12%</span>
              </div>
              <div className="text-3xl font-bold text-primary mb-1">2</div>
              <p className="text-muted-foreground">Active Portfolios</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-all border-2 hover:border-primary/20">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-8 h-8 text-primary" />
                <span className="text-xs text-muted-foreground">+8%</span>
              </div>
              <div className="text-3xl font-bold text-primary mb-1">45</div>
              <p className="text-muted-foreground">Profile Visitors</p>
            </Card>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Recent Portfolios</h2>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          <div className="space-y-4">
            {portfolios.map((portfolio) => (
              <Card key={portfolio.id} className="p-6 hover:shadow-lg transition-all border-2 hover:border-primary/20">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{portfolio.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span>Template: {portfolio.template}</span>
                      <span>•</span>
                      <span>Edited {portfolio.lastEdited}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline" className="text-destructive hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
