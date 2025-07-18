import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ButtonSelect } from "shared";

import styles from './styles';
import { Button } from "../../../shared";

const mergeSort = () => ({ type: 'SORTING/MERGE_SORT' });
const selectionSort = () => ({ type: 'SORTING/SELECTION_SORT' });
const bubbleSort = () => ({ type: 'SORTING/BUBBLE_SORT' });
const shakerSort = () => ({ type: 'SORTING/SHAKER_SORT' });
const quickSort = () => ({ type: 'SORTING/QUICK_SORT' });

const SortButtons = () => {
  const sortType = useSelector(({sortType}) => sortType.sorting);

  const dispatch = useDispatch();

  const onSelectMethod = (method) => {
    dispatch({ type: 'DESCRIPTION/CHANGE_DESCRIPTION', value: description[method] })
  };
  const description = {
      'merge': 'Сортировка слиянием (англ. merge sort) — алгоритм сортировки, который упорядочивает списки (или другие структуры данных, доступ к элементам которых можно получать только последовательно, например — потоки) в определённом порядке. Эта сортировка — хороший пример использования принципа «разделяй и властвуй». Сначала задача разбивается на несколько подзадач меньшего размера. Затем эти задачи решаются с помощью рекурсивного вызова или непосредственно, если их размер достаточно мал. Наконец, их решения комбинируются, и получается решение исходной задачи. ',
      'selection': 'Сортировка выбором (Selection Sort) — это простой алгоритм сортировки, который работает следующим образом: начиная с первого элемента массива, он предполагает, что этот элемент является минимальным. Затем алгоритм проходит по остальной части массива, чтобы найти минимальное значение и запомнить его индекс. После этого, если найденное минимальное значение отличается от первичного элемента, они обмениваются местами. Алгоритм переходит к следующему элементу и повторяет указанные шаги для всего массива, пока он не будет отсортирован. Временная сложность сортировки выбором составляет O(n^2) в худшем и среднем случаях, что делает его неэффективным для больших объемов данных. Однако он прост в реализации и работает на месте, не требуя дополнительных ресурсов для хранения данных.',
      'bubble': 'Сортировка пузырьком (Bubble Sort) — это простой алгоритм сортировки, который работает по принципу последовательного сравнения соседних элементов массива. В начале алгоритм проходит по всему массиву и сравнивает каждый элемент с тем, который следует за ним. Если текущий элемент больше следующего, они меняются местами. Таким образом, на каждой итерации самый большой элемент "всплывает" в конец массива. Процесс повторяется для оставшейся части массива, и он продолжается, пока не будет выполнен полный проход без обменов, что указывает на то, что массив отсортирован. Несмотря на свою простоту, сортировка пузырьком имеет временную сложность O(n^2) в худшем и среднем случаях, что делает ее неэффективной для больших массивов. Однако она может быть полезна в случаях, когда требуется простота реализации, и она хорошо работает для небольших наборов данных. Алгоритм также стабилен, что означает, что он сохраняет порядок равных элементов.',
      'shaker': 'Сортировка Шейкер (Shaker Sort), также известная как двунаправленная сортировка пузырьком, является улучшенной версией алгоритма сортировки пузырьком. Она работает по принципу, когда массив сортируется не только в одном направлении, но и в противоположном. В начале алгоритм проходит по массиву слева направо, сравнивая соседние элементы и меняя их местами, если они расположены в неправильном порядке. Это позволяет самому большому элементу "всплывать" к концу массива. После завершения прохода слева направо алгоритм выполняет обратный проход справа налево, повторяя процесс сравнения и обмена. Этот цикл продолжается до тех пор, пока не будет выполнен полный проход по массиву без каких-либо обменов, что означает, что массив отсортирован. Временная сложность сортировки Шейкер составляет O(n^2) в худшем и среднем случаях, что делает ее аналогичной сортировке пузырьком по эффективности. Тем не менее, она демонстрирует лучшую производительность на частично отсортированных массивах благодаря тому, что может быстрее установить порядок элементов. Сортировка Шейкер также является стабильной, сохраняя порядок равных элементов.',
      'quick': 'Быстрая сортировка (Quick Sort) — это эффективный алгоритм сортировки, который основан на принципе «разделяй и властвуй». Алгоритм выбирает опорный элемент из массива и разбивает остальные элементы на две подгруппы: те, которые меньше опорного, и те, которые больше или равны ему. Затем он рекурсивно применяет этот же процесс к двум получившимся подмассивам. Исключение составляет случай, когда подмассивы имеют размер, равный единице или нулю; в этом случае они считаются отсортированными. Быстрая сортировка обычно работает очень быстро, имея среднюю временную сложность O(n log n), но в худшем случае, когда массив уже отсортирован или все элементы равны, она может достичь временной сложности O(n²). Тем не менее, на практике алгоритм очень эффективен благодаря возможности использовать методы оптимизации, такие как выбор удачного опорного элемента и применение сортировки вставками для небольших подмассивов. Быстрая сортировка является неустойчивым алгоритмом, что означает, что порядок равных элементов не сохраняется. Благодаря своей высокой производительности и простоте реализации этот алгоритм широко используется для сортировки массивов и списков в различных приложениях.'
  }
  const buttons = [
    {
      value: 'merge',
      text: 'Слиянием',
      onClick: () => onSelectMethod('merge', mergeSort)
    },
    {
      value: 'selection',
      text: 'Выбором',
      onClick: () => onSelectMethod('selection', selectionSort)
    },
    {
      value: 'bubble',
      text: 'Пузырьком',
      onClick: () => onSelectMethod('bubble', bubbleSort)
    },
    {
      value: 'shaker',
      text: 'Шейкер',
      onClick: () => onSelectMethod('shaker', shakerSort)
    },
    {
      value: 'quick',
      text: 'Быстрая',
      onClick: () => onSelectMethod('quick', quickSort)
    },
  ];

  const handleClick = () => {
    switch(sortType) {
      case 'Слиянием': 
        dispatch(mergeSort())
        break;
      case 'Выбором': 
        dispatch(selectionSort())
        break;
      case 'Пузырьком': 
        dispatch(bubbleSort())
        break;
      case 'Шейкер': 
        dispatch(shakerSort())
        break;
      case 'Быстрая': 
        dispatch(quickSort())
        break;
      default:
        console.log('Не выбран метод')
    }
  }

  return(
    <>
    <ButtonSelect
      elements={ buttons }
      disabled={ false }
      wrapperClassName={ styles.wrapper }
    />
    <Button
      text='Запустить алгоритм' 
      disabled={ false }
      onClick={ handleClick }
    />
    </>
    
  );
};

export default SortButtons;