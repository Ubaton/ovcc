import { Check, Minus } from "lucide-react";
import React from "react";

export type FeatureRow = [string, boolean, boolean, boolean];

export interface PricingComparisonTableProps {
  features: FeatureRow[];
}

export default function PricingComparisonTable({ features }: PricingComparisonTableProps) {
  return (
    <div className="overflow-x-auto border rounded-xl">
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="bg-black text-white uppercase text-xs">
          <tr>
            <th className="px-6 py-4">Features</th>
            <th className="px-6 py-4 text-center">Free</th>
            <th className="px-6 py-4 text-center">Premium</th>
            <th className="px-6 py-4 text-center">Elite</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {features.map(([feature, free, premium, elite], i) => (
            <tr key={i} className="hover:bg-gray-50 transition-colors duration-200">
              <td className="px-6 py-4">{feature}</td>
                {[free, premium, elite].map((val, idx) => (
                  <td key={idx} className="text-center">
                  {val ? (
                    <Check className="mx-auto h-4 w-4 text-green-600" />
                  ) : (
                    <Minus className="mx-auto h-4 w-4 text-gray-400" />
                  )}                
              </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
