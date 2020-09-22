window.dom = {
  //创建节点
  create(string) {
    const container = document.createElement("template");
    //trim去掉两头的空格
    container.innerHTML = string.trim();
    return container.content.firstChild;
  },

  //在当前节点后面创建节点
  after(node, node2) {
    console.log(node.nextSibling);
    //找到节点的爸爸，调用爸爸的方法，把新节点插入下一个节点的前面
    node.parentNode.insertBefore(node2, node.nextSibling);
  },
  //在当前节点前面创建节点
  before(node, node2) {
    node.parentNode.insertBefore(node2, node);
  },
  append(parent,node){
      parent.appendChild(node)
  },
  //新增父节点
  wrap(node,parent){
      //先找到这个节点，把新节点添加为它的兄节点
      dom.before(node,parent)
      //把这个节点删除，添加为新节点的子节点
      dom.append(parent,node)
  },
  remove(node){
      node.parentNode.removeChild(node)
      return node
  },
  empty(node){
      const array = []
      let x = node.firstChild

      while(x){

          array.push(dom.remove(node.firstChild))
          x = node.firstChild
      }
      return array
  },
  attr(node,name,value){
      //函数重载
      if(arguments.length === 3){
          node.setAttribute(name, value)
      }else if(arguments.length ===2){
          return node.getAttribute(name)
      }
  },
  text(node,string){
      //适配
      if(arguments.length ===2){
          if ('innerText' in node) {
              node.innerHTML = string           //ie
          } else {
              node.textContent = string         //firefox/chrome
          }
      }else if(arguments.length ===1){
          if ('innerText' in node) {
              return node.innerHTML = string           //ie
          } else {
              return node.textContent = string         //firefox/chrome
          }
      }
    
      
  },
  html(node,string){
    if(arguments.length ===2){
        node.innerHTML = string
    }else if(arguments.length ===1){
        return node.innerHTML
    }
  },
    style(node,name,value){
      if (arguments.length === 3){
          //dom.style('div','color','red')
          node.style[name] = value
      }else if(arguments.length ===2){
          if(typeof name === 'string'){
              //dom.style(div,'color)
              return node.style[name]
          }else if(name instanceof Object){
              //dom.style(div,{color:'red'})
              const object = name
              for (let key in object){
                  node.style[key] = object[key]
              }
          }
      }
    },
    class:{
      add(node,className){
          node.classList.add(className)
      },
        remove(node,className) {
          node.classList.remove(className)
        },
        has(node,className){
          return node.classList.contains(className)
        }
    },
    on(node,eventName,fn){
      node.addEventListener(eventName,fn)
    },
    off(node,eventName,fn){
      node.addEventListener(eventName,fn)
    },
    find(selector,scope){
      //如果有scope，就在scope里面调用queryselectorAll，否则默认在document里面调
      return (scope||document).querySelectorAll(selector)
    },
    parent(node){
      return node.parentNode
    },
    children(node){
      return node.childNodes
    },
    siblings(node){
      //只要看到的这个子节点不是传入的结点，就返回
      return Array.from(node.parentNode.children).filter(n=>n!==node)

    },
    next(node){
      let x = node.nextSibling
        while (x && x.nodeType === 3){
          x = x.nextSibling
        }
        return x
    },
    previous(node){
        let x = node.previousSibling
        while (x && x.nodeType === 3){
            x = x.previousSibling
        }
        return x
    },
    each(nodeList,fn){
        console.log('这是我')
      for(let i=0;i<nodeList.length;i++){
          console.log('出错了吗')
        fn.call(null,nodeList[i])
      }
    },
    index(node){
      const list =dom.children(node.parentNode)
        console.log('进来index了')
        let i
        for(i=0;i<list.length;i++){
            if(list[i]===node){
                break
            }
        }
        return i
    }
};
