import React from 'react';
import { Card, Badge } from '../../components/ui';
import { User, Home, Briefcase, CheckSquare } from 'lucide-react';

export const LandingUseCases: React.FC = () => {
  return (
    <section id="use-cases" className="px-6 max-w-6xl mx-auto py-16">
      <div className="text-center mb-12">
        <Badge variant="accent" className="mb-2">
          Universal Application
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight text-[var(--ink)]">
          Built for every area of life
        </h2>
        <p className="text-sm text-[var(--muted)] mt-2 max-w-2xl mx-auto">
          From personal doctor appointments to shared family chores and collaborative team releases, ViDo adapts without requiring separate apps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Personal Use Case */}
        <Card className="flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[var(--accent)] flex items-center justify-center mb-4">
              <User className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--ink)]">Personal Tasks</h3>
            <p className="text-xs text-[var(--muted)] mt-1 mb-4 leading-relaxed">
              A private space for individual responsibilities, daily errands, study schedules, and self-directed projects.
            </p>
            <ul className="space-y-2 text-xs text-[var(--muted)]">
              <li className="flex items-center gap-2">
                <CheckSquare className="w-3.5 h-3.5 text-[var(--green)]" />
                Precise target dates and deadline times
              </li>
              <li className="flex items-center gap-2">
                <CheckSquare className="w-3.5 h-3.5 text-[var(--green)]" />
                Clear active, overdue, and completed separation
              </li>
              <li className="flex items-center gap-2">
                <CheckSquare className="w-3.5 h-3.5 text-[var(--green)]" />
                Private by default with strict user isolation
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-[var(--line)]">
            <span className="text-[11px] font-semibold text-[var(--accent)]">
              Example: Renew driver's license, Finish Chapter 4
            </span>
          </div>
        </Card>

        {/* Home & Family Use Case */}
        <Card className="flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[var(--amber)] flex items-center justify-center mb-4">
              <Home className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--ink)]">Household & Living</h3>
            <p className="text-xs text-[var(--muted)] mt-1 mb-4 leading-relaxed">
              Keep household maintenance, utility deadlines, property taxes, and family chores transparent and on track.
            </p>
            <ul className="space-y-2 text-xs text-[var(--muted)]">
              <li className="flex items-center gap-2">
                <CheckSquare className="w-3.5 h-3.5 text-[var(--amber)]" />
                Prevent missed utility bills and service dates
              </li>
              <li className="flex items-center gap-2">
                <CheckSquare className="w-3.5 h-3.5 text-[var(--amber)]" />
                Section limits keep lists approachable
              </li>
              <li className="flex items-center gap-2">
                <CheckSquare className="w-3.5 h-3.5 text-[var(--amber)]" />
                Honest status without guilt or stress
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-[var(--line)]">
            <span className="text-[11px] font-semibold text-[var(--amber)]">
              Example: HVAC winter maintenance, Electricity bill
            </span>
          </div>
        </Card>

        {/* Professional & Work Use Case */}
        <Card className="flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-indigo-600 flex items-center justify-center mb-4">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--ink)]">Work & Projects</h3>
            <p className="text-xs text-[var(--muted)] mt-1 mb-4 leading-relaxed">
              Structured accountability for deliverables, sprint targets, client roadmaps, and cross-functional commitments.
            </p>
            <ul className="space-y-2 text-xs text-[var(--muted)]">
              <li className="flex items-center gap-2">
                <CheckSquare className="w-3.5 h-3.5 text-indigo-600" />
                Explicit owner, priority, and due dates
              </li>
              <li className="flex items-center gap-2">
                <CheckSquare className="w-3.5 h-3.5 text-indigo-600" />
                Chronological update and checkpoint history
              </li>
              <li className="flex items-center gap-2">
                <CheckSquare className="w-3.5 h-3.5 text-indigo-600" />
                Designed for complete team visibility and transparent execution
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-[var(--line)]">
            <span className="text-[11px] font-semibold text-indigo-600">
              Example: Prepare Q4 budget, Deploy v1.2 release
            </span>
          </div>
        </Card>
      </div>
    </section>
  );
};
