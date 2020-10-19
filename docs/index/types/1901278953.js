// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1901278953"] = [{"values":[{"sourceSpan":{"start":[107,1],"name":".spago/ordered-collections/v1.6.1/src/Data/Set.purs","end":[107,55]},"score":4,"packageInfo":{"values":["ordered-collections"],"tag":"Package"},"name":"map","moduleName":"Data.Set","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set"],"Set"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set"],"Set"]},{"tag":"TypeVar","contents":"b"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Maps over the values in a set.\n\nThis operation is not structure-preserving for sets, so is not a valid\n`Functor`. An example case: mapping `const x` over a set with `n > 0`\nelements will result in a set with one element.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[102,1],"name":".spago/ordered-collections/v1.6.1/src/Data/Set/NonEmpty.purs","end":[102,71]},"score":4,"packageInfo":{"values":["ordered-collections"],"tag":"Package"},"name":"map","moduleName":"Data.Set.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set","NonEmpty"],"NonEmptySet"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set","NonEmpty"],"NonEmptySet"]},{"tag":"TypeVar","contents":"b"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Maps over the values in a set.\n\nThis operation is not structure-preserving for sets, so is not a valid\n`Functor`. An example case: mapping `const x` over a set with `n > 0`\nelements will result in a set with one element.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[366,1],"name":".spago/foldable-traversable/v4.1.1/src/Data/Foldable.purs","end":[366,67]},"score":28,"packageInfo":{"values":["foldable-traversable"],"tag":"Package"},"name":"find","moduleName":"Data.Foldable","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Try to find an element in a data structure which satisfies a predicate.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[138,1],"name":".spago/filterable/v3.0.2/src/Data/Filterable.purs","end":[139,31]},"score":0,"packageInfo":{"values":["filterable"],"tag":"Package"},"name":"filterDefaultPartitionMap","moduleName":"Data.Filterable","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Filterable"],"Filterable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A default implementation of `filter` using `partitionMap`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[133,1],"name":".spago/filterable/v3.0.2/src/Data/Filterable.purs","end":[134,31]},"score":0,"packageInfo":{"values":["filterable"],"tag":"Package"},"name":"filterDefaultPartition","moduleName":"Data.Filterable","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Filterable"],"Filterable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A default implementation of `filter` using `partition`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[128,1],"name":".spago/filterable/v3.0.2/src/Data/Filterable.purs","end":[129,31]},"score":0,"packageInfo":{"values":["filterable"],"tag":"Package"},"name":"filterDefault","moduleName":"Data.Filterable","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Filterable"],"Filterable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A default implementation of `filter` using `filterMap`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[79,3],"name":".spago/filterable/v3.0.2/src/Data/Filterable.purs","end":[80,33]},"score":0,"packageInfo":{"values":["filterable"],"tag":"Package"},"name":"filter","moduleName":"Data.Filterable","info":{"values":[{"typeClassArguments":[["f",null]],"typeClass":[["Data","Filterable"],"Filterable"],"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Filterable"],"Filterable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[715,1],"name":".spago/arrays/v5.3.1/src/Data/Array.purs","end":[715,64]},"score":11,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"sortWith","moduleName":"Data.Array","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Sort the elements of an array in increasing order, where elements are\nsorted based on a projection\n\n```purescript\nsortWith (_.age) [{name: \"Alice\", age: 42}, {name: \"Bob\", age: 21}]\n   = [{name: \"Bob\", age: 21}, {name: \"Alice\", age: 42}]\n```\n\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[311,1],"name":".spago/arrays/v5.3.1/src/Data/Array/NonEmpty.purs","end":[311,80]},"score":11,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"sortWith","moduleName":"Data.Array.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[21,3],"name":".spago/gen/v2.1.1/src/Control/Monad/Gen/Class.purs","end":[21,51]},"score":6,"packageInfo":{"values":["gen"],"tag":"Package"},"name":"resize","moduleName":"Control.Monad.Gen.Class","info":{"values":[{"typeClassArguments":[["m",null]],"typeClass":[["Control","Monad","Gen","Class"],"MonadGen"],"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Gen","Class"],"MonadGen"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Control","Monad","Gen","Class"],"Size"]}]},{"tag":"TypeConstructor","contents":[["Control","Monad","Gen","Class"],"Size"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":"Modifies the size state for a random generator.\n"}],"tag":"SearchResult"}]