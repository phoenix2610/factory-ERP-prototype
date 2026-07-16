# Graph Report - .  (2026-04-28)

## Corpus Check
- Corpus is ~33,120 words - fits in a single context window. You may not need a graph.

## Summary
- 46 nodes · 43 edges · 3 communities detected
- Extraction: 93% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Authentication System|Authentication System]]
- [[_COMMUNITY_Routing & Navigation|Routing & Navigation]]
- [[_COMMUNITY_State Management|State Management]]

## God Nodes (most connected - your core abstractions)
1. `getCurrentUser()` - 5 edges
2. `loadComponents()` - 4 edges
3. `_initTopbar()` - 4 edges
4. `_initSidebar()` - 3 edges
5. `setActivePage()` - 3 edges
6. `checkAuth()` - 2 edges
7. `hasPermission()` - 2 edges
8. `_populateNotifications()` - 2 edges
9. `setState()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `_initSidebar()` --calls--> `getCurrentUser()`  [INFERRED]
  router.js → auth.js
- `_initTopbar()` --calls--> `getCurrentUser()`  [INFERRED]
  router.js → auth.js
- `setActivePage()` --calls--> `setState()`  [INFERRED]
  router.js → state.js

## Communities

### Community 2 - "Authentication System"
Cohesion: 0.47
Nodes (3): checkAuth(), getCurrentUser(), hasPermission()

### Community 3 - "Routing & Navigation"
Cohesion: 0.6
Nodes (5): _initSidebar(), _initTopbar(), loadComponents(), _populateNotifications(), setActivePage()

### Community 5 - "State Management"
Cohesion: 0.5
Nodes (1): setState()

## Knowledge Gaps
- **Thin community `State Management`** (4 nodes): `clearState()`, `getState()`, `setState()`, `state.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `getCurrentUser()` connect `Authentication System` to `Routing & Navigation`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **Why does `setActivePage()` connect `Routing & Navigation` to `State Management`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **Why does `setState()` connect `State Management` to `Routing & Navigation`?**
  _High betweenness centrality (0.036) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `getCurrentUser()` (e.g. with `_initSidebar()` and `_initTopbar()`) actually correct?**
  _`getCurrentUser()` has 2 INFERRED edges - model-reasoned connections that need verification._