At the time of <script> execution the last DOM node is exactly <script>, because the browser did not process the rest of the page yet.

So the result is 1 (element node).

<html>

<body>
  <script>
    alert(document.body.lastChild.nodeType);
  </script>
</body>

</html>
