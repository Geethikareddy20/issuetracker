import IssueAdd from './components/IssueAdd';
import IssueFilter from './components/IssueFilter';
import IssueTable from './components/IssueTable';
import IssueList from './components/IssueList';

function App() {
  return (
    <div className="container">
      <IssueList />
      <IssueAdd />
      <IssueFilter />
      <IssueTable />
    </div>
  );
}

export default App;
